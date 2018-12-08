class Github {
  constructor() {
    this.client_id = 'e9e5c0aa070035a53e59';
    this.client_secret = '7e9f660de2d5baf942d12373ec6db850ed045f56';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}