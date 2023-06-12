const sequelize = require('../db')
const { DataTypes, INTEGER } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING, unique: true, },
    password: { type: DataTypes.STRING, unique: true, },
    role: { type: DataTypes.STRING, defaultValue: 'user' },
})

const Student = sequelize.define('student', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Group = sequelize.define('group', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    groupId: { type: DataTypes.INTEGER, unique: true, allowNull: false },
})

const Spec = sequelize.define('spec', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Teacher = sequelize.define('teacher', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    login: { type: DataTypes.STRING, unique: true, },
    password: { type: DataTypes.STRING, unique: false, },
})

const Discipline = sequelize.define('discipline', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Mark = sequelize.define('mark', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    mark: { type: DataTypes.INTEGER, allowNull: false },
    date: { type: DataTypes.STRING, allowNull: false },
    info: { type: DataTypes.STRING, allowNull: false }
})

const StudentInfo = sequelize.define('studentInfo', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    phone: {type: DataTypes.STRING, allowNull : true},
    adres: {type: DataTypes.STRING, allowNull : true},
    info: {type: DataTypes.STRING, allowNull : true},
})

Group.hasMany(Student)
Student.belongsTo(Group)

Spec.hasMany(Group)
Group.belongsTo(Spec)

Teacher.hasOne(Group)
Group.belongsTo(Teacher)

Student.hasMany(Mark)
Mark.belongsTo(Student)

Student.hasOne(StudentInfo)
StudentInfo.belongsTo(Student)

Discipline.hasMany(Mark)
Mark.belongsTo(Discipline)

Group.hasMany(Discipline)
Discipline.belongsTo(Group)

module.exports = {
    User,
    Student,
    StudentInfo,
    Group,
    Spec,
    Teacher,
    Discipline,
    Mark,
}