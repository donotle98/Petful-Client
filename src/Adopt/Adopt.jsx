import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PetfulServices from "../Services/PetfulServices";
import PetfulContext from "../Context/Context";
import DisplayPet from "../DisplayPet/DisplayPet";
import DisplayPeople from "../DisplayPeople/DisplayPeople";
import "./Adopt.css";

class Adopt extends Component {
    static contextType = PetfulContext;
    state = {
        name: "",
        submitName: false,
    };
    handleChangeName = (e) => {
        this.setState({
            name: e.currentTarget.value,
        });
    };
    handleAddUserToQueue = () => {
        PetfulServices.addAdopter(this.state.name).then((res) => {
            this.context.setAdopters(res);
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
                                this.handleAddUserToQueue();
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            );
        }
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
                        type={"Dog"}
                        userName={this.state.name}
                    />
                </div>
                <div className='pet-display'>
                    <DisplayPet
                        pet={this.context.Cats}
                        type={"Cat"}
                        userName={this.state.name}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Adopt);
