import React from 'react';
import './App.css';
import Data from './data.json';
import { TestComponent } from './TestComponent';

//JSONの型を推定する
type USSERS =typeof Data;

//文字列リテラル
const name = "Hello";

let username = "Hello";
let dummyNum = 2;
let bool = true;

let array1 = [true, false, true];
let array2 = [0, 1, "hello"];

interface NAME {
  first: string;
  last: string | null;
}

let nameObj: NAME = { first: "Yamada", last: null}

const func1 = (x: number, y: number): number => {
  return x + y;
};

//Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};

//union types
let value: boolean | number;
value = true;
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];


//リテラルとunionを掛け合わせたやり方
let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";

let memory: 256 | 534;
memory = 256;

//typeof: 宣言済み変数の継承
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";
// msg2 = 3; //error

let animal = { cat: "small cat" };
let newAnimal: typeof animal = {cat: "big cat"}

//keyof typeofのkey版
type KEYS = {
  primary: string;
  secondary: string;
};

let key: keyof KEYS;
key = "primary";
// key = "thedory"; error

//typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "BaseBall"
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";

//enum  自動で連番をつけてくれる
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number,
  OSType: OS;
};
const PC1: PC = {
  id:1,
  OSType: OS.Windows,
};

const PC2: PC = {
  id:2,
  OSType: OS.Mac,
};

//型の互換性
const comp1 = "test";
let comp2: string = comp1;

// let comp3: string = "test";
// let comp4: "test" = comp3;  error より抽象度が高いcomp3ははいらない

let funcComp1 = (x:number) => {};
let funcComp2 = (x: string) => {};

// funcComp1 = funcComp2; error


//Generics  ジェネリックス
interface GEN<T> {
  item: T
};

const gen0: GEN<string> = { item: "hello" };
// const gen1: GEN = { item: "hello" }; //error
// const gen2: GEN<number> = { item: "hello" }; //error

interface GEN1<T = string> {
  item: T;
}

const gen3: GEN1 = { item: "hello"};


interface GEN2<T extends string | number> {
  item: T;
}

const gen4: GEN2<number> = { item: 4 };

function funGen<T>(props: T) {
  return {item: props};
};
const gen5 = funGen("test");
const gen6 = funGen<string>("test");
const gen7 = funGen<string | null>("test");

function funGen1<T extends string | null> (props: T) {
  return {value: props};
};
const gen8 = funGen1("hello");
// const gen9 =funGen1(123) //error

interface Props {
  price: number;
};
function funGen3<T extends Props>(props: T) {  //関数
  return {value: props.price};
};
const gen10 = funGen3({price: 10});

const funcGen4 = <T extends Props>(props: T) => { //アロー関数
  return {value: props.price};
};





const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App" />
      </header>
    </div>
  );
}

export default App;
