import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from '../router';
import {MessageBox} from 'mint-ui';

Vue.use(Vuex)

export default new Vuex.Store({
	//在各个页面中共享的状态(数据)
  state: {
  	//标识用户是否已经登录,1表示已登录,0表示未登录
		isLogined:localStorage.getItem('isLogined')||0,
		//存储登录用户的相关信息
		userInfo:localStorage.getItem('userInfo')||{},
	},
	//来修改state中共享状态的操作方法
  mutations: {
		//登录
		login_mutations(state,payload){			
			// 修改登录状态为1
			state.isLogined = 1;
			// 修改登录用户的相关信息
			state.userInfo = payload;
		},
		// 注销
		logout_mutations(state){
			// 修改登录状态为0
			state.isLogined = 0;
			// 修改登录用户的相关信息为空对象
			state.userInfo = {};
		},
		message_mutation(state,payload){
			state.isLogined = 1;
			state.userInfo = payload;
		}

  },
  actions: {
		login_actions(context,payload){
			//向服务器发送异步请求
			axios.post('/login',payload).then(res=>{
				//登录成功
				if(res.data.code == 1){
					//提交Mutations
					context.commit('login_mutations',res.data.userInfo);
					//将用户登录状态保存到webstorage中
					localStorage.setItem('isLogined',1);
					localStorage.setItem('userInfo',res.data.userInfo);
					//页面跳转					
					router.push('/');
				} else {
					//显示警示对话框
					MessageBox('登录提示','用户名或密码错误');
				}
			});
		},
			// message_actions(context,payload){
			// 	axios.put('/message',payload).then(res=>{
			// 		if(res.data.code == 1){
			// 			context.commit('message_mutation',res.data.userInfo);
			// 			localStorage.setItem('userInfo',res.data.userInfo);
			// 			router.push('/');
			// 		}else {
			// 			//显示警示对话框
			// 			MessageBox("提示信息","保存失败--用户名错误")
			// 		}
			// 	})
			// }
			//console.log(payload);
			//console.log('现在要发送请求，以实现用户的登录操作了');

  },
  modules: {
	  
  }
})
