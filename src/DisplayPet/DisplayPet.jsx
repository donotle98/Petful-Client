import React, { Component } from "react";
import PetfulContext from "../Context/Context";
import PetfulServices from "../Services/PetfulServices";
import "./DisplayPet.css";

export class DisplayPet extends Component {
    static contextType = PetfulContext;
    state = { currentPet: {}, adoptButton: false, userHasAdopted: false };
    handleAdopt = () => {
        PetfulServices.dequeuePet(this.props.type).then((json) => {
            if (this.props.type === "dogs") {
                this.context.setDogs(json.value, json.list);
            }
            if (this.props.type === "cats") {
                this.context.setCats(json.value, json.list);
            }
        });
        this.setState({ userHasAdopted: true });
        this.props.setAdoptedPetName(this.props.pet.first.name);
    };

    handleAdoptButton = () => {
        if (this.props.adopt === true) {
            return (
                <div className='adopt-button'>
                    <button
                        onClick={() => {
                            this.handleAdopt();
                        }}
                    >
                        Adopt
                    </button>
                </div>
            );
        }
    };
    renderFirstPetInfo = () => {
        return (
            <div className='petInfo'>
                <div className='pet-image'>
                    <img
                        src={this.props.pet.first.imageURL}
                        alt={this.props.pet.first.imageDescription}
                    />
                </div>
                <p>Name: {this.props.pet.first.name}</p>
                <p>Age: {this.props.pet.first.age}</p>
                <p>Description: {this.props.pet.first.description}</p>
                <p>Gender: {this.props.pet.first.gender}</p>
                <p>Breed: {this.props.pet.first.breed}</p>
                <p>Story: {this.props.pet.first.story}</p>
                {this.handleAdoptButton()}
            </div>
        );
    };
    render() {
        return (
            <div className='each-petInfo'>
                <h2>Next {this.props.type} in line to be adopted: </h2>
                {this.renderFirstPetInfo()}
            </div>
        );
    }
}

export default DisplayPet;
