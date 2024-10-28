const Signup = ()  => {
    return (
        <div className="h-screen w-full bg-blue-100 px-10 py-10 flex justify-center items-center font-sans  ">
            <div className="h-4/6 w-1/2 bg-white rounded-xl px-4 py-10 flex shadow-2xl ">
                
                <div className="w-1/3 ">
                    <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.15752-9/455939825_502161162446678_5596098063319380230_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFN37SXoMtgzg6_oWLvlWfzK9fUSfE9d9sr19RJ8T1327ymrdcYfpZ4ByaBTBsGGIfG0uhhji2OU1mKAxS6F-if&_nc_ohc=TnAUXggxbO4Q7kNvgE_flOj&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_gid=AhNZXrlXv3F6xY6yce-bPRL&oh=03_Q7cD1QHPrx0lxFBnEjGKpYY9xG5iY0fftOLjsvwgtmgWRAw8pg&oe=6746CE5E" alt="" className="size-14 ml-20 mt-5"  />
                    <h1 className="text-xl font-medium ml-6 mt-12">TAO TAI KHOAN</h1>
                    <h3 className="ml-6">Dien thong tin cua ban</h3>
                </div>
                <div className="h-5/6 w-px bg-login-btn"></div>
                <div className="p-5 w-2/3">
                    <form action="">
                    <input type="text" placeholder="Ten dang nhap" className="block p-2 w-full my-3 outline-none border-2 border-black rounded-lg  focus:border-l-blue-800 focus:border-l-8"  />
                    <input type="text" placeholder="Ho va ten" className="block p-2 w-full my-3 outline-none border-2 border-black rounded-lg  focus:border-l-blue-800 focus:border-l-8"/>
                    <input type="password" placeholder="Mat khau" className="block p-2 w-full my-3 outline-none border-2 border-black rounded-lg  focus:border-l-blue-800 focus:border-l-8"/>
                    <input type="password" placeholder="Nhap lai mat khau" className="block p-2 w-full my-3 outline-none border-2 border-black rounded-lg  focus:border-l-blue-800 focus:border-l-8"/>
                    <button  className=" text-black float-end mt-8 mx-3 ">Dang nhap</button>
                    <button className="bg-login-btn  rounded-full text-white hover:shadow-2xl float-end h-10 w-20 mt-5">Tao</button>
                    </form>
                    
                </div>




            </div>
        </div>
    )
}
export default Signup