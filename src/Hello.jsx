import './Hello.css'
export default function Hello({firstname,lastname="jaidee",AGE=25}){
    return(<><h1>Hello World {firstname}{lastname}{AGE}</h1></>);

}