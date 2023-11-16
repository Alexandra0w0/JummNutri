import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

const MenuIndex = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const carouselItems = [
    { title: 'Registrar alimentos', color: '#60CBFF' },
    { title: 'Registrar Horas de sueño', color: '#F1A8C0' },
    { title: 'Registro de Ejercicio', color: '#FFDF6C' },
    { title: 'Registro de ingesta de agua', color: '#41C8BA' },
  ];

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.carouselItem, { backgroundColor: item.color }]}
      onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}
    >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  const handleNavigate = () => {
    navigation.navigate('GeneradorPlatillo');
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <View style={styles.contentContainer}>
        <Carousel
          data={carouselItems}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={ITEM_WIDTH}
          layout="default"
          loop={true}
          inactiveSlideScale={0.9}
          inactiveSlideOpacity={0.7}
          loopClonesPerSide={2}
        />
        <TouchableOpacity style={styles.button} onPress={handleNavigate}>
          <Text style={styles.buttonText}>Generador de platillo</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modal}>
          <Text style={styles.modalText}>¿Has consumido tus alimentos?</Text>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Sí</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const { width } = Dimensions.get('window');
const ITEM_WIDTH = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    marginLeft: -150,
    marginTop: 40,
  },
  contentContainer: {
    marginLeft: 40,
    marginTop: 4,
  },
  carouselItem: {
    width: ITEM_WIDTH,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#D297FF',
    width: 350,
    height: 200,
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 200,
    marginLeft: 15,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    marginTop:65,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
  },
  modalButton: {
    backgroundColor: '#D297FF',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
});

export default MenuIndex;

