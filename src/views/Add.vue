<template>
  <div id="add">
    <h1 class="card-header text-center">{{text.headerText}}</h1>

    <div class="boatForm">
      <form @submit.prevent="submitForm" class="d-flex flex-column justify-content-between">
        <div class="form-group row">
            <fieldset class="form-group col-md-12">
              <div class="row">
                <span class="col-form-label col-sm-6 pt-0">Is it a sailboat?</span>
                <div class="col-md-6">
                  <div class="form-check space-between">
                    <input
                      type="checkbox"
                      name="sailboat"
                      v-model="sailboat"
                      id="sailboat"
                    />
                    <label class="form-check-label" for="sailboat">Yes</label>
                  </div>
                </div>
              </div>
            </fieldset>
        </div>
        <div class="form-group row">
            <fieldset class="form-group col-md-12">
              <div class="row">
                <span class="col-form-label col-sm-6 pt-0">Does it have a motor?</span>
                <div class="col-md-6">
                  <div class="form-check space-between">
                    <input
                      type="checkbox"
                      name="motor"
                      v-model="motor"
                      id="motor"
                    />
                    <label class="form-check-label" for="motor">Yes</label>
                  </div>
                </div>
              </div>
            </fieldset>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="name">Model name</label>
            <input
              type="text"
              class="form-control"
              autocomplete="off"
              v-model="$v.name.$model"
              :class="{'is-invalid':$v.name.$error, 'is-valid':!$v.name.$invalid}"
              id="name"
            />
            <div class="invalid-feedback">
              <span v-show="!$v.name.required">Model name is required.</span>
              <span
                v-show="!$v.name.minLength"
              >Model name must have at least {{$v.name.$params.minLength.min}} letters.</span>
              <span
                v-show="!$v.name.maxLength"
              >Model name must have at most {{$v.name.$params.maxLength.max}} letters.</span>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="name">Manufacturing year</label>
            <input
              type="number"
              class="form-control"
              autocomplete="off"
              v-model.number.lazy="$v.year.$model"
              :class="{'is-invalid':$v.year.$error, 'is-valid':!$v.year.$invalid}"
              id="name"
            />
            <div class="invalid-feedback">
              <span v-show="!$v.year.required">Manufacturing year is required.</span>
              <span
                v-show="!$v.year.between"
              >Manufacturying year must be between {{$v.year.$params.between.min}} and {{$v.year.$params.between.max}}</span>
            </div>
          </div>
          <div class="form-group col-md-12">
            <label for="name">Price</label>
            <input
              type="number"
              class="form-control"
              autocomplete="off"
              step="0.01"
              v-model.number.lazy="$v.price.$model"
              :class="{'is-invalid':$v.price.$error, 'is-valid':!$v.price.$invalid}"
              id="name"
            />
            <div class="invalid-feedback">
              <span v-show="!$v.price.required">Price is required.</span>
              <span v-show="!$v.price.numeric">Price must be a number.</span>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="image-url">Image URL</label>
            <input
              type="text"
              class="form-control"
              autocomplete="off"
              v-model="imageUrl"
              id="image-url"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-success col-md-12">{{text.buttonText}}</button>
      </form>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  between,
  decimal
} from "vuelidate/lib/validators";
import BoatService from "@/services/BoatService.js";

export default {
  name: "Add",
  components: {},
  props: {},
  computed: {},

  data() {
    return {
      name: "",
      year: "",
      price: "",
      type: "",
      sailboat:false,
      motor: false,
      imageUrl: null,
      id: null,
      text: {
        buttonText: "Submit",
        headerText: "Add a boat"
      }
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(64)
    },
    year: {
      required,
      between: between(0, new Date().getFullYear())
    },
    price: {
      required,
      decimal
    },
  },
  created() {
    if (this.$route.params.boat !== undefined) {
      this.name = this.$route.params.boat.modelName;
      this.year = this.$route.params.boat.manufacturingYear;
      this.price = this.$route.params.boat.price;
      this.id = this.$route.params.boat._id;
      this.motor = this.$route.params.boat.motor;
      this.sailboat = this.$route.params.boat.sailboat;
      if (this.$route.params.boat.url !== null)
        this.imageUrl = this.$route.params.boat.url;
      this.text.buttonText = "Save edit";
      this.text.headerText = "Edit boat";
    }
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitstatus = "FAIL";
      } else {
        let obj = {
          modelName: this.name,
          manufacturingYear: this.year,
          price: this.price,
          url: this.imageUrl,
          sailboat: this.sailboat,
          motor:this.motor,
        }
        if (this.$route.params.boat !== undefined) {
          console.log(obj)
          obj._id = this.id;
          BoatService.editBoat(obj);
        } else {
          BoatService.addBoat(obj);
        }
        this.submitstatus = "SUCCESS";
      }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.is-invalid {
  border-color: rgb(228, 20, 20) !important;
  font-size: 15px;
}
.is-valid {
  border-color: #28a745 !important;
}
.btn {
  margin-top: 2em;
}
.valid-feedback {
  color: #ffffff;
  font-size: 15px;
}
.space-between{
  
}
#add {
  margin: 0 auto;
  width: 30em;
}
h1,
label,
span {
  color: #ffffff;
  font-weight: 550;
  text-shadow: 2px 2px black;
}
label {
  font-size: 1.3em;
}
input,
button {
  padding: 0.5em;
}
#add > h1 {
  text-align: center;
  color: white;
}

.boatForm {
  margin: 0 auto;
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 2em 4em;
}
.boatForm h1 {
  text-align: center;
}
.boatForm label {
  color: #fff;
  transition: all 0.5s ease-in-out;
}
.form-row {
  margin-bottom: 1em;
}
.boatForm input[type="text"] {
  border-radius: 8px;
  border: 2px solid #ffffff;
  width: 100%;
  padding: 8px 5px;
  font-size: 16px;
  font-weight: 600;
}

.radioDiv {
  display: flex;
  justify-content: space-around;
}
.radioDiv input {
  margin: auto 0.5em;
}
</style>
