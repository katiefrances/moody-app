const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const MedsSchema = require("./meds_schema");

const DailySchema = new Schema({
  // date for new day
  date: {
    type: Date,
    required: true,
    // default: Date.now(),
    validate: {
      validator: function(dailyDate) {
        if (dailyDate === null) {
        }
      },
      message: "Please enter the date!"
    }
  },

  sleep: {
    type: Number,
    minlength: 0,
    maxlength: 24,
    validate: {
      validator: function(sleep) {
        if (sleep === null) {
        }
      },
      message: "Please enter an amount!"
    }
  },

  tired: {
    type: Boolean,
    required: true,
    default: false,
    validate: {
      validator: function(tired) {
        return tired && tired.length > 0;
      },
      message: "Please enter how tired you are today!"
    }
  },

  // moods
  manic: {
    type: Number,
    required: true,
    min: 0,
    max: 4,
    validate: {
      validator: function(manic) {
        return manic && manic.length > 0;
      },
      message: "Please enter how manic you were today!"
    }
  },

  // set severity out of 4, 0 being stable

  depressed: {
    type: Number,
    required: true,
    minlength: 0,
    maxlength: 4,
    validate: {
      validator: function(depressed) {
        return depressed && depressed.length > 0;
      },
      message: "Please enter how depressed you were today!"
    }
  },

  // set severity out of 4, 0 being stable
  anxiety: {
    type: Number,
    required: true,
    minlength: 0,
    maxlength: 4,
    validate: {
      validator: function(anxiety) {
        return anxiety && anxiety.length > 0;
      },
      message: "Please enter how anxious you were today!"
    }
  },

  irritation: {
    // also amount somehow
    type: Number,
    required: true,
    validate: {
      validator: function(irritated) {
        if (irritated === null) {
        }
      },
      message: "Please enter how irritated you are today!"
    }
  },

  // meds
  meds: {
    type: Boolean,
    required: true,
    validate: {
      validator: function(medication) {
        if (medication === null) {
        }
      },
      message: "Did you take your meds today"
    },

    // drugs and booze
    drugs: {
      type: Boolean,
      required: true,
      validate: {
        validator: function(drugs) {
          return drugs && drugs.length > 0;
        },
        message: "Please enter all the substances for today"
      }
    },

    // drugsAmount: {
    //   type: Number,
    //   min: 0,
    //   max: 4
    // },

    alcohol: {
      type: Number,
      required: true,
      validate: {
        validator: function(alcohol) {
          return alcohol && alcohol.length > 0;
        },
        message: "Please enter how much alcohol you had today"
      }
    },

    // alcoholAmount: {
    //   type: Number,
    //   min: 0
    // },

    // food etc
    ate: {
      // what and how many meals
      type: Number,
      required: true
    },

    exercise: {
      // amount?
      type: Boolean,
      required: true
    },

    caffeine: {
      type: Number,
      required: true
    },

    period: {
      type: Boolean,
      required: true
    },

    events: {
      type: String
    },

    dbtskills: {
      type: String
    },

    triggers: {
      type: String
    }
  }
});

module.exports = DailySchema;
