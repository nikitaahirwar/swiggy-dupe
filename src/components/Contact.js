const Contact = () => {
    return (
        <div className="contact">
            <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
            <form className="flex flex-col gap-4 w-6/12 m-auto">
                <input className="border border-gray-300 rounded-md p-2" type="text" placeholder="Name" />
                <input className="border border-gray-300 rounded-md p-2" type="email" placeholder="Email" /> 
                <button type="submit" className="bg-green-500 text-white cursor-pointer border rounded-md px-4 py-2">Submit</button>
            </form>            
        </div>
    )
}

export default Contact