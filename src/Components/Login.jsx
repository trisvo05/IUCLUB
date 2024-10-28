function Login() {
    return (
        <div className="h-screen w-full bg-blue-100 flex justify-center items-center font-sans  ">
            <div className="bg-white w-1/4   h-3/4 rounded-xl py-8 shadow-2xl">
                <div className="mb-5">
                    <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.15752-9/455939825_502161162446678_5596098063319380230_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFN37SXoMtgzg6_oWLvlWfzK9fUSfE9d9sr19RJ8T1327ymrdcYfpZ4ByaBTBsGGIfG0uhhji2OU1mKAxS6F-if&_nc_ohc=TnAUXggxbO4Q7kNvgE_flOj&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_gid=AhNZXrlXv3F6xY6yce-bPRL&oh=03_Q7cD1QHPrx0lxFBnEjGKpYY9xG5iY0fftOLjsvwgtmgWRAw8pg&oe=6746CE5E" alt="" className="size-14 ml-40" />
                </div>
                <div className="text-xl font-medium ml-10">DANG NHAP</div>
                <div className="h-0.5 w-32 bg-cyan-600 ml-10"></div>
                
                < form className=" flex flex-col items-center">
                    <input type="text" placeholder="Ten dang nhap" className="block mt-10 p-4 border-2   w-8/12 border-login-border outline-none rounded-xl focus:border-l-blue-800 focus:border-l-8"/>
                    <input type="password" placeholder="Mat khau" className="block mt-3 p-4 border-2 w-8/12 border-login-border outline-none rounded-xl  focus:border-l-blue-800 focus:border-l-8"/>
                    
                    <button className="bg-login-btn mt-10 h-10 w-8/12  rounded-xl text-white hover:shadow-2xl  ">Dang nhap</button>
                    <button className=" mt-4">Tao tai khoan</button>
                    
                    

                </form>
            </div>
        </div>
      
    );
}
export default Login