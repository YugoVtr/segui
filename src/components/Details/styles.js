import styled from "styled-components/native";

export const Container = styled.View`
  height: 200px;
  width: 100%;
  position: absolute;
  bottom: 0;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  shadow-radius: 10;
  elevation: 3;
  border: 1px solid #ddd;
  align-items: center;
  padding: 20px;
  borderTopLeftRadius: 30;
  borderTopRightRadius: 30;
  background: #004c9a;
`;

export const TypeTitle = styled.Text`
  font-size: 20px;
  padding: 10px;
  color: #fff;
`;

export const TypeDescription = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const TypeImage = styled.Image`
  height: 80px;
  margin: 10px 0;
`;

export const RequestButton = styled.TouchableOpacity`
  background: #004c9a;
  justify-content: center;
  align-items: center;
  height: 44px;
  align-self: stretch;
  margin-top: 10px;
`;

export const RequestButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
