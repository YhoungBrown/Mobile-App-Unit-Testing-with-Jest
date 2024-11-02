import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type TermsAndConditionsProps = {
  onPress: () => void;
  text: string;
}

const TermsAndConditions = ({ onPress, text }: TermsAndConditionsProps) => {
  const [selected, setSelected] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const limit = 50;

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  const handleToggleCheckbox = () => {
    setSelected(!selected);
  }

  const truncatedText = text.length > limit ? text.substring(0, limit) + "..." : text;

  return (
    <View>
      <Text>Terms And Conditions</Text>
      
      <Text testID={isExpanded ? 'whenexpanded' : undefined}>
        {isExpanded ? text : truncatedText}
      </Text>

      {text.length > limit && (
        <TouchableOpacity testID='showmorebutton' onPress={handleToggleExpand}>
          <Text>{isExpanded ? "Show Less" : "Show More"}</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={handleToggleCheckbox} testID='checkboxing'>
        {selected ? (
          <MaterialIcons name="check-box" size={30} color="#900" />
        ) : (
          <MaterialIcons name="check-box-outline-blank" size={30} color="#900" />
        )}
      </TouchableOpacity>

      {selected && (
        <Button title="Agree" testID='nxtpage' onPress={onPress} />
      )}
    </View>
  );
}

export default TermsAndConditions;
