class HolbertonCourse{
    constructor(name,length,studnts){
        if(typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(studnts)){
            throw new Error('Invalid input type')
        }
        this._name = name;
        this._length = length;
        this._students = studnts;
    }

    get name() {
        return this._name;
    }

    set name(value){
        if (typeof value !== 'string'){
            throw new Error('Invalid input type');
        }
        this._name = value;
    }

    get length() {
        return this._length;
    }

    set length(value){
        if (typeof value !== 'number'){
            throw new Error('Invalid input type');
        }
        this._length = value;
    }

    get studnts(){
        return this._students;
    }

    set studnts(value){
        if (!Array.isArray(value)){
            throw new Error('Invalid input type');
        }
        this._students = value;
    }
}
