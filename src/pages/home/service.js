import axios from 'axios';

export async function propmissHome(payload) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
       resolve({status:200, message:'ok', data:{user:'zjp'}})
    },2000)
  });
}