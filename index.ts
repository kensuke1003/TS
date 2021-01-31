import { isConstructorDeclaration, NoSubstitutionTemplateLiteral } from "typescript";

let num = 100;  //勝手に数字だと推論してくれる　型推論

let num:number = 100; //型注釈


//any型
let num:any = 100
num = "124"

let bool:boolean;

let bool:false = true

let num:number = 132_323_311

let num:123 =123 //ナンバーのリテラル型

let str:"string"= "string"  //文字列の型

//オブジェクトの型
let obj: {name: string,age: number}={
  name: 'taro',
  age: 12,
}


//型エイリアス（別名、通称）
//型の別名を作ることができる
type MyType = number;

let some: MyType
//オブジェクトの時によく使う


//インデックスシグネチャ：オブジェクトのキーの型が不確定な時
const airline :{ [id:string]:string}= {
  A12: "taro",
  A13: "jiro",
  A14: "hanako"
}
//型を予め決めておく　いちいち書くのはだるいので

//ユニオンタイプとインターセクションタイプ

//ユニオンタイプ　：合併型　or
//インターセクションタイプ　：交差型 and


//ユニオンタイプ　( | )
let t:string | number ="asd"


type A ={
  name:string;
  age:number;
}
type B={
  name:string;
  from:string
};

type C = A | B;

let user :C;


//インターセクションタイプ(&)
type A ={
  name:string;
};

type B ={
  age:number;
};

type C = A & B;

const obj:C ={
  name:"asd",
  age:12
}


//配列
let numberArray: number[]=[1,2,3]
//数字以外が入るとエラーが出るようになっている
//文字列も入れたい時にはユニオン型を使用

//タプル　この配列に入るものはこれです！と決めておく
let array : [string,string,number]=["str","str",68];
//順番通りに

//値の欠如を表すタイプ
//null:値のないこと
//undefuned:値がまだ割り当てられていない変数
//void: returnを持たない関数の戻り値の型
//void　== undefined (undefinedが返り値とされている)

const add2 = (n:number)=>{
  console.log("hello")
}


//never:絶対に戻ることのない関数の戻り値
const throwError = ()=>{
  throw new Error('この時点でプログラムが終了する')
};


//関数の型  引数で必ず型をかく
type Add2 = (n:number)=> number;

const add2: Add2 =(n) =>{
  return n + 2;
};
//=================================

const add2 = (n:number,m:number): number=>{
  return n + m;
}


type taro = {
  name:"taro",
  age: 12
}

type jiro = {
  name:"jiro",
  age:15;
};

//型の絞りこみ
const whichMan = (user: Taro | Jiro)=>{
  if(user.name === "taro"){
    user.age}
    else{
      user
    }
}
//事前にエラーを出してくれる

//ジェネリクス　型の引数 発展的

//引数には配列がくる 配列のなかの一番最初の要素を返す
//配列が空の場合はnullで返す
const getFirstElement = <T>(array: T[]):T | null
=>{
  if(array.length === 0){
    return null;
  }
  return array [0];
};
const numbers = [1,2,3,4,5,"taro"];
const result = getFirstElement(numbers)


type MyMap = <T,U>(array: T[],callback)=>{}


type Filter= (array:T[],callback:(element: T=>boolean)=>T[])

const todos = [
  {id:""}
]