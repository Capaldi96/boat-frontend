import axios from "axios";
const url = 'http://localhost:5000';
export default {
  async getBoats() {  
    let res = await axios.get(url + "/api/boats");
    return res.data;
  },
  async getDetailedBoat(id) {
    let res = await axios.get(url + "/api/boats/" + id);
    return res.data;
  },
  async search(data){
    let res = await axios.get(url + "/api/search?" + data);
    return res.data;
  },
  addBoat(data){
    axios.post(url + '/api/boats/add',{
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
    axios.delete(url + '/api/boats/delete/' + id)
  },
  editBoat(data){
    axios.put(url + '/api/boats/edit/' + data._id, {
      modelName: data.modelName,
      manufacturingYear: data.manufacturingYear,
      price: data.price,
      motor: data.motor,
      sailboat: data.sailboat,
      url: data.url,
    })
  },
  async resetDatabase(){
    let res = await axios.get(url + "/api/resetmongodb");
    return res.data;
  }
  
};
