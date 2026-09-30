import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import StoryBrain from '../services/StoryBrain';

export default function DestiniScreen() {
  const storyBrain = useRef(new StoryBrain()).current;

  const [storyTitle, setStoryTitle] = useState<string>(storyBrain.getStory());
  const [choice1, setChoice1] = useState<string>(storyBrain.getChoice1());
  const [choice2, setChoice2] = useState<string>(storyBrain.getChoice2());
  const [isChoice2Visible, setIsChoice2Visible] = useState<boolean>(
    storyBrain.buttonShouldBeVisible()
  );

  const handleChoice = (choiceNumber: 1 | 2) => {
    storyBrain.nextStory(choiceNumber);
    setStoryTitle(storyBrain.getStory());
    setChoice1(storyBrain.getChoice1());
    setChoice2(storyBrain.getChoice2());
    setIsChoice2Visible(storyBrain.buttonShouldBeVisible());
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D1117" />

      {/* Khung hiển thị cốt truyện */}
      <View style={styles.storyContainer}>
        <Text style={styles.storyText}>{storyTitle}</Text>
      </View>

      {/* Khung các nút lựa chọn */}
      <View style={styles.buttonContainer}>
        {/* Nút Choice 1 (Đỏ) */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.button, styles.choice1Button]}
          onPress={() => handleChoice(1)}
        >
          <Text style={styles.buttonText}>{choice1}</Text>
        </TouchableOpacity>

        {/* Nút Choice 2 (Xanh dương) - Ẩn khi đến kết thúc */}
        {isChoice2Visible && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, styles.choice2Button]}
            onPress={() => handleChoice(2)}
          >
            <Text style={styles.buttonText}>{choice2}</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  storyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  storyText: {
    color: '#F0F6FC',
    fontSize: 22,
    lineHeight: 34,
    textAlign: 'center',
    fontWeight: '500',
  },
  buttonContainer: {
    marginBottom: 20,
    gap: 12,
  },
  button: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choice1Button: {
    backgroundColor: '#E63946',
  },
  choice2Button: {
    backgroundColor: '#1D3557',
    borderWidth: 1,
    borderColor: '#457B9D',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24,
  },
});