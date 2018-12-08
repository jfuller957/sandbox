class Weather {
  constructor(city, state) {
    this.apiKey = '4a2a068135937cb431bcdee633762c8d';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(``)
  }
}