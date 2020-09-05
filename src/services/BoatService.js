import axios from "axios";
let baseUrl;
if( process.env.NODE_ENV === 'production' ) {
	// AJAX stannar kvar på samma server när vi kör production, använd relativ URL
	baseUrl = '/api';
}
else {  // NODE_ENV === 'development'
	// Använd absolut URL med portnumret från din serverfil, steg 3a
	baseUrl = 'http://localhost:5000/api';
}
export default {
  async getBoats() {  
    let res = await axios.get(baseUrl + "/boats");
    return res.data;
  },
  async getDetailedBoat(id) {
    let res = await axios.get(baseUrl + "/boats/" + id);
    return res.data;
  },
  async search(data){
    let res = await axios.get(baseUrl + "/search?" + data);
    return res.data;
  },
  addBoat(data){
    axios.post(baseUrl + '/boats/add',{
      modelName: data.modelName,
      manufacturingYear: data.manufacturingYear,
      price: data.price,
      motor: data.motor,
      sailboat: data.sailboat,
      url: data.url
    })
    .then((response)=>{
      console.log(response)
    })
  },
  deleteBoat(id){
    axios.delete(baseUrl + '/boats/delete/' + id)
  },
  editBoat(data){
    axios.put(baseUrl + '/boats/edit/' + data._id, {
      modelName: data.modelName,
      manufacturingYear: data.manufacturingYear,
      price: data.price,
      motor: data.motor,
      sailboat: data.sailboat,
      url: data.url,
    })
  },
  async resetDatabase(){
    let res = await axios.get(baseUrl + "/resetmongodb");
    return res.data;
  }
  
};
