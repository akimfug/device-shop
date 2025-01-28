import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const Role = sequelize.define('role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
});

const Cart = sequelize.define('cart', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const CartDevice = sequelize.define('cart_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
});

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
});

const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
});

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const RoleUser = sequelize.define('role_user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const DeviceRating = sequelize.define('rating_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

Cart.hasOne(User);  
User.belongsTo(Cart);

Device.hasMany(DeviceInfo, {as: 'info'});
DeviceInfo.belongsTo(Device);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(CartDevice);
CartDevice.belongsTo(Device);

User.hasOne(Cart);
Cart.belongsTo(User);

Rating.belongsToMany(Device, {through: DeviceRating});
Device.belongsToMany(Rating, {through: DeviceRating});

User.hasMany(Rating);
Rating.belongsTo(User);

User.belongsToMany(Role, {through: RoleUser});
Role.belongsToMany(User, {through: RoleUser});

Cart.hasMany(CartDevice);
CartDevice.belongsTo(Cart);


Type.hasMany(Device);
Device.belongsTo(Type);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Type.belongsToMany(Brand, {through: TypeBrand});
Brand.belongsToMany(Type, {through: TypeBrand});



// User.afterCreate(async (user) => {
//     const role = await Role.findOne({where: {name: 'USER'}});
//     await user.addRole(role);
// });

User.afterCreate(async (user) => {
    const cart = await Cart.create({userId: user.id});
    await user.setCart(cart);
});

export {
    Role,
    User,
    Cart,
    CartDevice,
    Device,
    Type,
    Brand,
    Rating,
    DeviceInfo,
    DeviceRating,
    TypeBrand   
}