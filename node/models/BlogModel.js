import db from "../database/db.js";

import {DataTypes} from "sequelize";

 const BlogModel= db.define("blogs",{
    title:{type:DataTypes.STRING},
    contend:{type:DataTypes.STRING},
})

export default BlogModel;