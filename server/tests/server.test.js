const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server.js');
const { Todo } = require('./../models/Todo.js');
const { ObjectID } = require('mongodb');
const todos = [{
    _id: new ObjectID(),
    text: 'first test'
}, {
    _id: new ObjectID(),
    text: 'second test'
}];


beforeEach((done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test to do next';
        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    res.send(400).send(err);
                    return done(err);
                }

                Todo.find({ text }).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });
    it('should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todo')
            .send({})
            .expect(404)
            .end((err, res) => {
                if (err)
                    return done(err);
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            });
    });
}
);

describe('GET /todos/:id', () => {
    it('should return toodo doc', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
    });
});
/* 
describe('DELETE /todos/:id', () => {
    it('should delete the todo doc', (done) => {
        request(app)
            .delete(`/todos/${todos[1]._id.toHexString()}`)
            .expect(200)
            .expect((res)=> {
                expect((res.body.todo._id)).toBe(todos[0]._id.toHexString());
            }).end((err,res) => {
                if(err){
                    return done(err);
                }
                Todo.findById(todos[1]._id.toHexString()).then((todo)=>{
                    expect(todo).toNotExist();
                    done();
                }).catch((e)=> done(e));
            });
    });
});
 */
/* 
describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('./todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(3);
            }).end(done);
    });
}); */