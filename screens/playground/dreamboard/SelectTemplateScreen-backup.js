import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const SelectTemplateScreen = ({ route, navigation }) => {
    const { selectedPhotos } = route.params; // Retrieve selected photos from navigation
    const [selectedTemplate, setSelectedTemplate] = useState(null);
  
    const templates = [
        [
          { x: 0, y: 0, width: 50, height: 100, image: null }, // Split vertically
          { x: 50, y: 0, width: 50, height: 100, image: null },
        ],
        [
          { x: 0, y: 0, width: 100, height: 50, image: null }, // Top half
          { x: 0, y: 50, width: 50, height: 50, image: null }, // Bottom left
          { x: 50, y: 50, width: 50, height: 50, image: null }, // Bottom right
        ],
        [
          { x: 0, y: 0, width: 50, height: 50, image: null }, // Grid
          { x: 50, y: 0, width: 50, height: 50, image: null },
          { x: 0, y: 50, width: 50, height: 50, image: null },
          { x: 50, y: 50, width: 50, height: 50, image: null },
        ],
        [
          { x: 0, y: 0, width: 100, height: 33.33, image: null }, // Three horizontal rows
          { x: 0, y: 33.33, width: 100, height: 33.33, image: null },
          { x: 0, y: 66.66, width: 100, height: 33.33, image: null },
        ],
        [
          { x: 0, y: 0, width: 33.33, height: 100, image: null }, // Three vertical columns
          { x: 33.33, y: 0, width: 33.33, height: 100, image: null },
          { x: 66.66, y: 0, width: 33.33, height: 100, image: null },
        ],
        [
          { x: 0, y: 0, width: 66.66, height: 50, image: null }, // L-shaped layout
          { x: 66.66, y: 0, width: 33.33, height: 50, image: null },
          { x: 0, y: 50, width: 100, height: 50, image: null },
        ],
        [
          { x: 0, y: 0, width: 50, height: 50, image: null }, // Large block + small blocks
          { x: 50, y: 0, width: 50, height: 50, image: null },
          { x: 0, y: 50, width: 50, height: 50, image: null },
          { x: 50, y: 50, width: 25, height: 50, image: null },
          { x: 75, y: 50, width: 25, height: 50, image: null },
        ],
        [
          { x: 0, y: 0, width: 100, height: 33.33, image: null }, // Two large blocks with one below
          { x: 0, y: 33.33, width: 50, height: 66.66, image: null },
          { x: 50, y: 33.33, width: 50, height: 66.66, image: null },
        ],
        [
          { x: 0, y: 0, width: 66.66, height: 100, image: null }, // Diagonal split
          { x: 66.66, y: 0, width: 33.33, height: 33.33, image: null },
          { x: 66.66, y: 33.33, width: 33.33, height: 33.33, image: null },
          { x: 66.66, y: 66.66, width: 33.33, height: 33.33, image: null },
        ],
        [
          { x: 0, y: 0, width: 100, height: 25, image: null }, // 4 horizontal rows with equal height
          { x: 0, y: 25, width: 100, height: 25, image: null },
          { x: 0, y: 50, width: 100, height: 25, image: null },
          { x: 0, y: 75, width: 100, height: 25, image: null },
        ],
      ];
      
  
    const handleTemplateSelection = (template) => {
      // Populate template blocks with selected photos
      const updatedTemplate = template.map((block, index) => ({
        ...block,
        image: selectedPhotos[index % selectedPhotos.length], // Cycle through selected photos
      }));
      setSelectedTemplate(updatedTemplate);
    };
  
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.headerText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.headerText}>Next</Text>
          </TouchableOpacity>
        </View>
  
        {/* Main Display */}
        <View style={styles.templatePreview}>
          {selectedTemplate ? (
            <View style={styles.templatePreview}>
              {selectedTemplate.map((block, i) => (
                <View
                  key={i}
                  style={[
                    styles.templateBlock,
                    {
                      width: `${block.width}%`,
                      height: `${block.height}%`,
                      left: `${block.x}%`,
                      top: `${block.y}%`,
                    },
                  ]}
                >
                  {block.image ? (
                    <Image source={block.image} style={styles.blockImage} />
                  ) : (
                    <Text style={styles.placeholderText}>No image</Text>
                  )}
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.emptyTemplate}>
              <Text style={styles.emptyTemplateText}>Select a template</Text>
            </View>
          )}
        </View>
  
        {/* Template Selection */}
        <Text style={styles.previewText}>Select your template:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.templateList}>
          {templates.map((template, index) => (
            <TouchableOpacity
              key={index}
              style={styles.templateItem}
              onPress={() => handleTemplateSelection(template)}
            >
              <View style={styles.templatePreviewMini}>
                {template.map((block, i) => (
                  <View
                    key={i}
                    style={[
                      styles.templateBlockMini,
                      {
                        width: `${block.width}%`,
                        height: `${block.height}%`,
                        left: `${block.x}%`,
                        top: `${block.y}%`,
                      },
                    ]}
                  />
                ))}
              </View>
              <Text style={styles.templateLabel}>Template {index + 1}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1bee7',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  templatePreview: {
    width: 300,
    height: 300,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: 'center', // Centers horizontally
  },
  templateBlock: {
    position: 'absolute',
    backgroundColor: '#DDD',
    borderWidth: 1,
    borderColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  emptyTemplate: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  emptyTemplateText: {
    fontSize: 16,
    color: '#AAA',
  },
  templateList: {
    flexDirection: 'row',
  },
  templateItem: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  templatePreviewMini: {
    width: 80,
    height: 80,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
  },
  templateBlockMini: {
    position: 'absolute',
    backgroundColor: '#DDD',
    borderWidth: 1,
    borderColor: '#CCC',
  },
  templateLabel: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
  },
  previewText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 10,
  },
});

export default SelectTemplateScreen;
