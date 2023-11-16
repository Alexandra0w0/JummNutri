import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, DrawerLayoutAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const MenuNavigator = () => {
  const navigation = useNavigation();
  let drawerRef = null;

  const openDrawer = () => {
    drawerRef.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.closeDrawer();
  };

  const onMenuItemPress = (menuItem) => {
    console.log(`Elemento del menú seleccionado: ${menuItem}`);
    closeDrawer();
  };

  return (
    <DrawerLayoutAndroid
      ref={(ref) => (drawerRef = ref)}
      drawerWidth={250}
      drawerPosition="left"
      renderNavigationView={() => (
        <View style={styles.drawerContainer}>
          <View style={styles.userLogoContainer}>
            <Icon name="user" size={50} color="#000" />
          </View>
          <View style={styles.menuItemsContainer}>
            <TouchableOpacity style={[styles.menuItem, { marginBottom: 10 }]} onPress={() => onMenuItemPress('Nombre de usuario')}>
              <View style={styles.menuItemIcon}>
                <Icon name="user" size={20} color="#000" />
              </View>
              <Text style={styles.menuItemText}>Nombre de usuario</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, { marginBottom: 10 }]} onPress={() => onMenuItemPress('Crear notificaciones personalizadas')}>
              <View style={styles.menuItemIcon}>
                <Icon name="bell" size={20} color="#000" />
              </View>
              <Text style={styles.menuItemText}>Crear notificaciones personalizadas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, { marginBottom: 10 }]} onPress={() => onMenuItemPress('Modificar plan alimenticio')}>
              <View style={styles.menuItemIcon}>
                <Icon name="cutlery" size={20} color="#000" />
              </View>
              <Text style={styles.menuItemText}>Modificar plan alimenticio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, { marginBottom: 10 }]} onPress={() => onMenuItemPress('Visualizar plan alimenticio')}>
              <View style={styles.menuItemIcon}>
                <Icon name="eye" size={20} color="#000" />
              </View>
              <Text style={styles.menuItemText}>Visualizar plan alimenticio</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.logoutContainer} onPress={() => onMenuItemPress('Salir')}>
            <View style={styles.menuItemIcon}>
              <Icon name="sign-out" size={20} color="#FF0000" />
            </View>
            <Text style={styles.menuItemText}>Salir</Text>
          </TouchableOpacity>
        </View>
      )}
      onDrawerOpen={openDrawer}
      onDrawerClose={closeDrawer}
    >
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.menuIcon} onPress={openDrawer}>
          <Text>
            <Icon name="bars" size={30} color="#000" />
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 70,
    marginTop: 60,
  },
  drawerContainer: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  userLogoContainer: {
    marginBottom: -500,
    alignItems: 'flex-start',
    marginLeft: 30,
  },
  menuItemsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  menuItem: {
    flexDirection: 'row',
  },
  menuItemIcon: {
    marginRight: 10,
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  userLogoContainer: {
    marginBottom: -400, // Ajusta este valor según tus preferencias
    alignItems: 'flex-start',
    marginLeft: 80,
  },
});

export default MenuNavigator;
