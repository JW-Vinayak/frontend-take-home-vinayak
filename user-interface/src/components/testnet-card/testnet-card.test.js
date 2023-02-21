import { shallow } from 'enzyme';
import TestnetCard from './testnet-card';
import { TESTNETS } from '../../utils/dummy-data';

describe('TestnetCard', () => {
    const testnet = TESTNETS[0];

    it('renders correctly', () => {
        const wrapper = shallow(<TestnetCard testnet={testnet} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('displays the testnet name', () => {
        const wrapper = shallow(<TestnetCard testnet={testnet} />);
        expect(wrapper.find('.testnet_card__name').text()).toEqual('Testnet 1');
    });

    it('displays the off-chain actors count', () => {
        const wrapper = shallow(<TestnetCard testnet={testnet} />);
        expect(wrapper.find('.testnet_card__off_chain_actors_count').text()).toEqual('2 off-chain actors');
    });

    it('displays the blockchain count', () => {
        const wrapper = shallow(<TestnetCard testnet={testnet} />);
        expect(wrapper.find('.testnet_card__blockchain_count').text()).toEqual('2 Blockchains');
    });

    it('displays the correct blockchain icons', () => {
        const wrapper = shallow(<TestnetCard testnet={testnet} />);
        expect(wrapper.find('BlockchainIconArray').prop('icons')).toEqual(['Polygon.svg', 'Avalance.svg']);
    });

    it('displays the correct off-chain status', () => {
        const wrapper = shallow(<TestnetCard testnet={testnet} />);
        expect(wrapper.find('.testnet_card__off_chain_status').text()).toEqual('1 off-chain updating');
    });

    it('displays the correct blockchain status', () => {
        const wrapper = shallow(<TestnetCard testnet={testnet} />);
        expect(wrapper.find('.testnet_card__blockchain_status').text()).toEqual('Blockchain updating');
    });

    it('displays the correct status icon', () => {
        const wrapper = shallow(<TestnetCard testnet={testnet} />);
        expect(wrapper.find('.testnet_card__status img').prop('src')).toEqual('Running.svg');
    });

    it('displays the last modified time', () => {
        const wrapper = shallow(<TestnetCard testnet={testnet} />);
        expect(wrapper.find('.testnet_card__last_modified_on span').text()).toEqual('Modified a year ago');
    });
});