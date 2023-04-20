import { useState } from "react";
import { View } from "react-native";
import { Button, Menu, Modal, Portal } from "react-native-paper";
import theme from "../../theme";

const Select = ({ data, onSelect, selected, placeholder }) => {
  const [visible, setVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const menuItemStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    // backgroundColor: "rgba(100,0,200,0.5)",
    width: "100%",
  };

  const menuItemContentStyle = {
    // backgroundColor: "rgba(100,200,50,0.5)",
  };

  const closeMenu = () => {
    setMenuVisible(false);
    setVisible(false);
  };

  return (
    <>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
          <>
            <Menu
              style={{
                borderRadius: 10,
                overflow: "hidden",
                padding: 0,
              }}
              visible={menuVisible}
              onDismiss={closeMenu}
              anchor={
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "rgba(255,0,100,0.5)",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "white",
                      borderRadius: 5,
                      // overflow: "hidden",
                      width: "80%",
                      shadowOffset: {
                        width: 10,
                        height: 10,
                      },
                      shadowOpacity: 0.1,
                      shadowRadius: 10,
                      paddingVertical: theme.spacing.normal,
                    }}
                  >
                    <Menu.Item
                      title={placeholder}
                      style={menuItemStyle}
                      contentStyle={{ ...menuItemContentStyle, flex: 1 }}
                      disabled
                    />
                    {data?.map((item) => (
                      <Menu.Item
                        key={item.label}
                        onPress={() => {
                          onSelect(item);
                          closeMenu();
                        }}
                        title={item.label}
                        style={menuItemStyle}
                        contentStyle={{ ...menuItemContentStyle, flex: 1 }}
                      />
                    ))}
                  </View>
                </View>
              }
            ></Menu>
          </>
        </Modal>
      </Portal>
      <Button
        icon="chevron-down"
        mode="contained"
        onPress={showModal}
        style={{
          backgroundColor: theme.colors.secondary,
          borderRadius: 0,
        }}
        iconColor={theme.colors.textPrimary}
        contentStyle={{
          paddingVertical: theme.spacing.large,
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          backgroundColor: theme.colors.secondary,
        }}
        textColor="black"
      >
        {selected?.label || placeholder}
      </Button>
    </>
  );
};

export default Select;
