import React from 'react'
import {Input} from 'antd'

// const Part = () => {
    
//         return (
//           <div className="m-b-3 p-x-3">
//             <div className="row">
//               <div className="col-8">
//                 <FormItem label="业务推荐码" error={getErrorMsg('referralCode')}>
//                   <div>
//                     {getFieldDecorator('referralCode')(
//                       <Input
//                         disabled={disabled || referralCodeFlag === 1}
//                         placeholder="如无推荐码，此项可为空"
//                         maxLength={18}
//                       />
//                     )}
//                   </div>
//                 </FormItem>
//               </div>
//             </div>
//           </div>
//         )
//     }
    const Refzhuanfa = React.forwardRef((props, ref) => {
        return (
            <div className="m-b-3 p-x-3">
              <div className="row">
                <div className="col-8">
                  {/* <FormItem label="业务推荐码" error={getErrorMsg('referralCode')}> */}
                    <div>
                       {/* <Input
                          
                          placeholder="如无推荐码，此项可为空"
                          maxLength={18}
                          value='9999'
                        /> */}
                        <input ref={ref} defaultValue='666666' />
                    </div>
                  {/* </FormItem> */}
                </div>
              </div>
            </div>
          )
    });

  export default Refzhuanfa