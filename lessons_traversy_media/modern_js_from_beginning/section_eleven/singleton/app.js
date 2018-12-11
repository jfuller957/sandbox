const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'James' });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);

// It isn't possible to have more than one instance it'll just give back the same instance.

console.log(instanceA);