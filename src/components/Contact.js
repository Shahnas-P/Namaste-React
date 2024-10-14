const Contact = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl pt-4">Contact Us</h1>
      <form className="border border-black w-3/12 m-auto mt-5 text-center flex  flex-col ">
      <div className="flex justify-evenly p-4  ">
      <label className="font-mono font-bold text-2xl">Name</label>
      <input className="border" placeholder="Write your name"/>
     </div>
     
     <div className="flex justify-evenly   p-4 ">
      <label className="font-mono font-bold text-2xl">Message</label>
      <input className="border" placeholder="Message here...."/>
     </div>
     <button className="font-mono font-bold text-2xl border border-black m-10 bg-black text-white rounded-md">Submit</button>
      </form>
    
    </div>
  );
};
export default Contact;
