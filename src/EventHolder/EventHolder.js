import {makeAutoObservable} from 'mobx'
export default class EventHolder{
    constructor() {
        makeAutoObservable(this)
    }
}