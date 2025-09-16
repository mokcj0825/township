import { useState, useEffect } from 'react'
import { SimpleConversionEngine } from './classes/SimpleConversionEngine'
import { conversionRules } from './data/conversionRules'
import { runSimplePizzaExample, testSpecificCalculation } from './examples/simplePizzaExample'
import './App.css'

function App() {
  const [engine] = useState(() => new SimpleConversionEngine(conversionRules))
  const [targetItem, setTargetItem] = useState('pizza')
  const [targetAmount, setTargetAmount] = useState(4)
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const calculationResult = engine.calculateRequirements(targetItem, targetAmount)
    setResult(calculationResult)
  }

  useEffect(() => {
    calculate()
  }, [targetItem, targetAmount])

  const runExamples = () => {
    runSimplePizzaExample()
    testSpecificCalculation()
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>🍕 Simple Conversion Engine</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>📋 Item Analysis</h2>
        <p><strong>Base Items (Corps):</strong> {engine.getBaseItems().join(', ')}</p>
        <p><strong>Derived Items:</strong> {engine.getDerivedItems().join(', ')}</p>
        
        <h3>🏭 Categories:</h3>
        {engine.getCategories().map(category => (
          <div key={category} style={{ marginLeft: '20px', marginBottom: '10px' }}>
            <strong>{category}:</strong> {engine.getItemsByCategory(category).join(', ')}
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>🎯 Calculator</h2>
        <div style={{ marginBottom: '10px' }}>
          <label>Target Item: </label>
          <select value={targetItem} onChange={(e) => setTargetItem(e.target.value)} style={{ minWidth: '200px' }}>
            <optgroup label="Base Items (Corps)">
              {engine.getBaseItems().map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </optgroup>
            <optgroup label="Food Items">
              {engine.getDerivedItems().filter(item => !engine.getCategories().some(cat => engine.getItemsByCategory(cat).includes(item))).map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </optgroup>
            {engine.getCategories().map(category => (
              <optgroup key={category} label={`${category} (${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')})`}>
                {engine.getItemsByCategory(category).map(item => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Amount: </label>
          <input 
            type="number" 
            value={targetAmount} 
            onChange={(e) => setTargetAmount(Number(e.target.value))}
            min="1"
          />
        </div>
      </div>

      {result && (
        <div style={{ marginBottom: '20px' }}>
          <h2>📊 Results</h2>
          <div style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
            <h3>🌾 Base Items Required:</h3>
            <ul>
              {Array.from(result.requiredBaseItems.entries()).map(([item, amount]) => (
                <li key={item}>{item}: {Math.ceil(amount)} units</li>
              ))}
            </ul>

            <h3>🔄 Production Steps:</h3>
            <ol>
              {result.productionSteps.map((step: any, index: number) => (
                <li key={index}>
                  <strong>{step.ruleId}</strong> ({step.batches} batches)
                  <br />
                  Inputs: {step.inputs.map((i: any) => `${i.amount} ${i.item}`).join(', ')}
                  <br />
                  Outputs: {step.outputs.map((o: any) => `${o.amount} ${o.item}`).join(', ')}
                </li>
              ))}
            </ol>

            {result.waste.size > 0 && (
              <>
                <h3>🗑️ Waste/Remainders:</h3>
                <ul>
                  {Array.from(result.waste.entries()).map(([item, amount]) => (
                    <li key={item}>{item}: {Number(amount).toFixed(2)} units</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}

      <div>
        <button onClick={runExamples} style={{ padding: '10px 20px', fontSize: '16px' }}>
          🧪 Run Console Examples
        </button>
        <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
          Click the button above and check the browser console for detailed examples
        </p>
      </div>
    </div>
  )
}

export default App
