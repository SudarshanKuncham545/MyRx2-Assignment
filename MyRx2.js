class ImmutableClass {
    constructor(name, id, dateOfJoining, addresses) {
    
      if (typeof name !== 'string' || typeof id !== 'string') {
        throw new Error('Name and ID must be strings.');
      }
      if (!(dateOfJoining instanceof Date)) {
        throw new Error('dateOfJoining must be a Date object.');
      }
      if (!Array.isArray(addresses)) {
        throw new Error('addresses must be an array.');
      }
      if (!addresses.every(addr => typeof addr === 'object' && addr !== null)) {
        throw new Error('Each address must be a valid object.');
      }
  
    
      this._name = name;
      this._id = id;
      this._dateOfJoining = new Date(dateOfJoining);
      this._addresses = addresses.map(address => Object.freeze({ ...address })); 
  
      Object.freeze(this);
    }
  
    get name() {
      return this._name;
    }
  
    get id() {
      return this._id;
    }
  
    get dateOfJoining() {
      return new Date(this._dateOfJoining); 
    }
  
    get addresses() {
      return this._addresses.slice(); 
    }
  }
  
  try {
    const address1 = { street: '123 manikeshwar Colony', city: 'Hyderabad', zip: '12345' };
    const address2 = { street: '456 Elm Colony', city: 'Bhongir', zip: '67890' };
    const immutableObject = new ImmutableClass(
      'Sudarshan.K',
      'ID12345',
      new Date('2024-12-23'),
      [address1, address2]
    );
  
    console.log(immutableObject.name); 
    console.log(immutableObject.id); 
    console.log(immutableObject.dateOfJoining);
    console.log(immutableObject.addresses); 
  

    immutableObject.name = 'Sudarshan.K'; 
    immutableObject.addresses[0].street = 'New Street'; 
    console.log(immutableObject.addresses[0].street);
  } catch (error) {
    console.error(error.message);
  }
  