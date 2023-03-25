const Thermostat = require('./thermostat')

describe('Thermostat', () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('sets the default temperature to 20', () => {
    expect(thermostat.getTemperature()).toEqual(20)
  });
    
  it('up() inceases the temperature by one degree', () => {
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(21)
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(22)
  });

  it('decreases the temperature by one degree', () => {
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(19)
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(18)
  });

  it('has the minimum temperature of 10 degrees', () => {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  })

  it('has power saving mode on by default', () => {
    expect(thermostat.savingMode).toEqual(true)
  });

  it('switches off power saving mode', () => {
    thermostat.savingModeStatus(false)
    expect(thermostat.savingMode).toEqual(false)
  });

  it('switches power saving mode back on', () => {
    thermostat.savingModeStatus(false)
    expect(thermostat.savingMode).toEqual(false)
    thermostat.savingModeStatus(true)
    expect(thermostat.savingMode).toEqual(true)
  });

  describe('sets the maximum temperature', () => {   
    it('to 25 degrees if saving mode in ON', () => {
      thermostat.savingModeStatus(true);
      for (let i = 0; i < 20; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toBe(25)
    });

    it('to 32 degrees if saving mode in OFF', () => {
      thermostat.savingModeStatus(false);
      for(let i = 0; i < 20; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(32)
    });
  });
  


});