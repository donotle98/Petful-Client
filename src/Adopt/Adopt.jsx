import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PetfulServices from "../Services/PetfulServices";
import PetfulContext from "../Context/Context";
import DisplayPet from "../DisplayPet/DisplayPet";
import faker from "faker";
import "./Adopt.css";

class Adopt extends Component {
    static contextType = PetfulContext;
    state = {
        name: "",
        submitName: false,
        isUserFirstPerson: false,
        firstPerson: "",
        adopterNames: [],
    };
    handleChangeName = (e) => {
        this.setState({
            name: e.currentTarget.value,
        });
    };
    handleAddUserToQueue = (name) => {
        const newName = {
            name: name,
        };
        PetfulServices.addAdopter(newName).then((res) => {
            this.context.setAdopters(res);
            this.setState({
                firstPerson: res[1],
            });
            if (res[0] !== this.state.name) {
                this.dequeuePeople();
            }
        });

        this.setState({
            submitName: false,
        });
    };
    handleSubmitNewName = () => {
        if (this.state.submitName) {
            return (
                <div className='newname-form'>
                    <form>
                        <label>Enter full name:</label>
                        <input
                            type='text'
                            name='name'
                            onChange={(e) => {
                                this.handleChangeName(e);
                            }}
                        />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                this.handleAddUserToQueue(this.state.name);
                                this.timer();
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            );
        }
    };
    adoptPet = (type) => {
        PetfulServices.dequeuePet(type).then((json) => {
            if (type === "dogs") {
                this.context.setDogs(json.value, json.list);
            }
            if (type === "cats") {
                this.context.setCats(json.value, json.list);
            }
        });
    };

    timer = () => {
        const interval = setInterval(() => {
            console.log("Timer called");
            console.log("Users name: ", this.state.name);
            this.handleAddUserToQueue(faker.name.findName());
            const type = ["cats", "dogs"][Math.round(Math.random())];
            this.adoptPet(type);
            if (this.state.firstPerson === this.state.name) {
                this.handleAddUserToQueue(faker.name.findName());
                this.stopTime(interval);
                this.setState({
                    isUserFirstPerson: true,
                });
            }
        }, 5000);
    };

    stopTime = (interval) => {
        clearInterval(interval);
        console.log("Timer is stopped");
    };

    dequeuePeople = () => {
        PetfulServices.dequeuePeople().then((json) => {
            console.log("dequeued");
        });
    };

    componentDidMount() {
        PetfulServices.getAdopters().then((res) => {
            this.context.setAdopters(res);
        });
        PetfulServices.getDogs().then((res) => {
            const first = res.value;
            const list = res.next;
            this.context.setDogs(first, list);
        });
        PetfulServices.getCats().then((res) => {
            const first = res.value;
            const list = res.next;
            this.context.setCats(first, list);
        });
    }

    render() {
        return (
            <div className='adoption-page'>
                <h2>Next in line:</h2>
                <div className='adopter-sect'>
                    {this.context.Adopters.map((names) => {
                        return names.map((name, y) => {
                            return (
                                <h2 className='adopter-name' key={y}>
                                    {name}
                                </h2>
                            );
                        });
                    })}
                </div>

                <div className='control-center'>
                    <button
                        onClick={() => this.props.history.push("/")}
                        className='pulse'
                    >
                        Go back
                    </button>
                    <button
                        onClick={() => {
                            this.setState({
                                submitName: !this.state.submitName,
                            });
                        }}
                        className='pulse'
                    >
                        Add your name
                    </button>
                    {this.handleSubmitNewName()}
                </div>
                <hr />
                <div className='pet-display'>
                    <DisplayPet
                        pet={this.context.Dogs}
                        type={"dogs"}
                        userName={this.state.name}
                        adopt={this.state.isUserFirstPerson}
                        dequeuePeople={this.dequeuePeople}
                    />
                </div>
                <div className='pet-display'>
                    <DisplayPet
                        pet={this.context.Cats}
                        type={"cats"}
                        userName={this.state.name}
                        adopt={this.state.isUserFirstPerson}
                        dequeuePeople={this.dequeuePeople}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Adopt);
