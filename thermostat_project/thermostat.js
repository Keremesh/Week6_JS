class Thermostat {
  constructor(temperature) {
    this.temperature = 20
    this.savingMode = true;
    this.minTemperature = 10;
    this.maxTemperature = 32;
    this.maxSavingTemperature = 25; 
  }

  up() {
    if (this.temperature < this.maxSavingTemperature && this.savingMode === true) {
      return this.temperature ++;
    } else if (this.temperature < this.maxTemperature && this.savingMode === false) {
      return this.temperature ++;
    }
  }

  down() {
    if (this.temperature > this.minTemperature) {
      return this.temperature -= 1
    }
  }

  getTemperature() {
    return this.temperature
  }

  savingModeStatus(set) {  
    this.savingMode = set;  
  }

  reset() {
    this.temperature = 20
  }

  currentEnergyUsage() {
    if (this.temperature < 18) {
      return "low-usage"
    }  else if (this.temperature <= 25) {
      return "medium-usage"
    } else {
      return 'high-usage'
    }
  }

  // 
}




module.exports = Thermostat;