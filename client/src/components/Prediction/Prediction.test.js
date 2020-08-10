import React from 'react';
import {shallow} from 'enzyme';
import Prediction from "./Prediction";
import Image from "react-bootstrap/Image";
import DiseaseChance from "../DiseaseChance/DiseaseChance";

describe('<Prediction />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Prediction prediction={{}}/>);
    });

    it('should render Image component with imageUrl as src', () => {
        wrapper.setProps({
            prediction: {
                imageUrl: 'testImageUrl'
            }
        });
        expect(wrapper.contains(<Image src="testImageUrl" alt="Mole" fluid/>)).toEqual(true);
    });

    it('should render DiseaseChance component with actinic keratoses probability as props', () => {
        wrapper.setProps({
            prediction: {
                actinicKeratosesProbability: 0.8
            }
        });
        expect(wrapper.contains(<DiseaseChance disease={"Actinic Keratoses"} probability={0.8}/>)).toEqual(true);
    });

    it('should render DiseaseChance component with basal cell carcinoma probability as props', () => {
        wrapper.setProps({
            prediction: {
                basalCellCarcinomaProbability: 0.8
            }
        });
        expect(wrapper.contains(<DiseaseChance disease={"Basal Cell Carcinoma"} probability={0.8}/>)).toEqual(true);
    });

    it('should render DiseaseChance component with benign keratosis like lesions probability as props', () => {
        wrapper.setProps({
            prediction: {
                benignKeratosisLikeLesionsProbability: 0.8
            }
        });
        expect(wrapper.contains(<DiseaseChance disease={"Benign Keratosis Like Lesions"} probability={0.8}/>)).toEqual(true);
    });

    it('should render DiseaseChance component with dermatofibroma probability as props', () => {
        wrapper.setProps({
            prediction: {
                dermatofibromaProbability: 0.8
            }
        });
        expect(wrapper.contains(<DiseaseChance disease={"Dermatofibroma"} probability={0.8}/>)).toEqual(true);
    });

    it('should render DiseaseChance component with melanoma probability as props', () => {
        wrapper.setProps({
            prediction: {
                melanomaProbability: 0.8
            }
        });
        expect(wrapper.contains(<DiseaseChance disease={"Melanoma"} probability={0.8}/>)).toEqual(true);
    });

    it('should render DiseaseChance component with melanocytic nevi probability as props', () => {
        wrapper.setProps({
            prediction: {
                melanocyticNeviProbability: 0.8
            }
        });
        expect(wrapper.contains(<DiseaseChance disease={"Melanocytic Nevi"} probability={0.8}/>)).toEqual(true);
    });

    it('should render DiseaseChance component with vascular lesions probability as props', () => {
        wrapper.setProps({
            prediction: {
                vascularLesionsProbability: 0.8
            }
        });
        expect(wrapper.contains(<DiseaseChance disease={"Vascular Lesions"} probability={0.8}/>)).toEqual(true);
    });
});