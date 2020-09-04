import axios from "axios";
let baseUrl;
if(process.env.NODE_ENV === 'production'){
  baseUrl = '/api'
} else{
  baseUrl = 'http://localhost:5000/api'
}
export default {
  async getBoats() {  
    let res = await axios.get(url + "/boats");
    return res.data;
  },
  async getDetailedBoat(id) {
    let res = await axios.get(url + "/boats/" + id);
    return res.data;
  },
  async search(data){
    let res = await axios.get(url + "/search?" + data);
    return res.data;
  },
  addBoat(data){
    axios.post(url + '/boats/add',{
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
    axios.delete(url + '/boats/delete/' + id)
  },
  editBoat(data){
    axios.put(url + '/boats/edit/' + data._id, {
      modelName: data.modelName,
      manufacturingYear: data.manufacturingYear,
      price: data.price,
      motor: data.motor,
      sailboat: data.sailboat,
      url: data.url,
    })
  },
  async resetDatabase(){
    let res = await axios.get(url + "/resetmongodb");
    return res.data;
  }
  
};
