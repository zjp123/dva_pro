import axios from 'axios';

export async function login(payload) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
       resolve({status:200, message:'ok', data:{user:'zjp'}})
    },2000)
  });
}