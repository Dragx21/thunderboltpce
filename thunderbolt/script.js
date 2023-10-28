function calculateConsumption() {
    // Get user inputs
    const wattage = parseFloat(document.getElementById('wattage').value);
    const duration = parseFloat(document.getElementById('duration').value);
    const cost = parseFloat(document.getElementById('cost').value);

    // Calculate power consumption
    const consumption = wattage * duration * cost;
    document.getElementById('consumptionResult').textContent = `Power Consumption: ${consumption.toFixed(2)} $`;

    // Check if consumption exceeds user-set limit (you would need to provide the limit)
    const userSetLimit = 100; // Example limit (replace with actual limit)
    const exceedLimitMessage = consumption > userSetLimit ? "Exceeds Limit" : "Within Limit";
    document.getElementById('exceedLimit').textContent = `Status: ${exceedLimitMessage}`;
}
