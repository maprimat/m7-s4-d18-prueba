import { mount } from '@vue/test-utils';
import ChildComp from '@/components/ChildComp.vue';

describe('Componente: ChildComp.vue', () => {

    it('Captura el mensaje y evite el evento', async () => {
        const wrapper = mount(ChildComp);

        // Probamos que se ingrese texto al input
        const message = '';
        const input = wrapper.find('input[type="text"]');
        await input.setValue(message);

        // Probamos el método submit a través del click en el botón
        const boton = wrapper.find('form');
        await boton.trigger('submit');

        // Probamos que se envíe un mensaje correctamente
        expect(wrapper.emitted('message-sent')).toBeTruthy();

        // Probamos que el mensaje enviado sea igual al que recibimos
        expect(wrapper.emitted('message-sent')[0]).toEqual([message]);
    });

});
