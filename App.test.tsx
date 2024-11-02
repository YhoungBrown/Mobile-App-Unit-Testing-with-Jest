import renderer from "react-test-renderer"
import App from "./App"


describe("App File", () => {
    it("has just 3 child", () => {
        const result = renderer.create(<App />).toJSON();
        console.log(result)
        expect(result.children.length).toBe(4);
    })

    it("renders correctly", () => {
        const result = renderer.create(<App />).toJSON();
        expect(result).toMatchInlineSnapshot(`
<View
  style={
    {
      "alignItems": "center",
      "backgroundColor": "#fff",
      "flex": 1,
      "justifyContent": "center",
      "marginTop": 100,
    }
  }
>
  <Text>
    Open up App.tsx to start working on your app!
  </Text>
  <Text>
    Hey, I'm here today
  </Text>
  <View>
    <Text>
      Terms And Conditions
    </Text>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing...
    </Text>
    <View
      accessibilityState={
        {
          "busy": undefined,
          "checked": undefined,
          "disabled": undefined,
          "expanded": undefined,
          "selected": undefined,
        }
      }
      accessibilityValue={
        {
          "max": undefined,
          "min": undefined,
          "now": undefined,
          "text": undefined,
        }
      }
      accessible={true}
      collapsable={false}
      focusable={true}
      onClick={[Function]}
      onResponderGrant={[Function]}
      onResponderMove={[Function]}
      onResponderRelease={[Function]}
      onResponderTerminate={[Function]}
      onResponderTerminationRequest={[Function]}
      onStartShouldSetResponder={[Function]}
      style={
        {
          "opacity": 1,
        }
      }
      testID="showmorebutton"
    >
      <Text>
        Show More
      </Text>
    </View>
    <View
      accessibilityState={
        {
          "busy": undefined,
          "checked": undefined,
          "disabled": undefined,
          "expanded": undefined,
          "selected": undefined,
        }
      }
      accessibilityValue={
        {
          "max": undefined,
          "min": undefined,
          "now": undefined,
          "text": undefined,
        }
      }
      accessible={true}
      collapsable={false}
      focusable={true}
      onClick={[Function]}
      onResponderGrant={[Function]}
      onResponderMove={[Function]}
      onResponderRelease={[Function]}
      onResponderTerminate={[Function]}
      onResponderTerminationRequest={[Function]}
      onStartShouldSetResponder={[Function]}
      style={
        {
          "opacity": 1,
        }
      }
      testID="checkboxing"
    >
      <Text
        allowFontScaling={false}
        selectable={false}
        style={
          [
            {
              "color": "#900",
              "fontSize": 30,
            },
            undefined,
            {
              "fontFamily": "material",
              "fontStyle": "normal",
              "fontWeight": "normal",
            },
            {},
          ]
        }
      >
        
      </Text>
    </View>
  </View>
  <RCTScrollView>
    <View>
      <View>
        <View
          accessibilityState={
            {
              "busy": undefined,
              "checked": undefined,
              "disabled": undefined,
              "expanded": undefined,
              "selected": undefined,
            }
          }
          accessibilityValue={
            {
              "max": undefined,
              "min": undefined,
              "now": undefined,
              "text": undefined,
            }
          }
          accessible={true}
          collapsable={false}
          focusable={false}
          onClick={[Function]}
          onResponderGrant={[Function]}
          onResponderMove={[Function]}
          onResponderRelease={[Function]}
          onResponderTerminate={[Function]}
          onResponderTerminationRequest={[Function]}
          onStartShouldSetResponder={[Function]}
          style={
            {
              "opacity": 1,
            }
          }
          testID="product-image 0"
        >
          <Text>
            Images Here
          </Text>
          <Image
            resizeMode="contain"
            source={1}
            style={
              {
                "height": 200,
                "width": 150,
              }
            }
          />
        </View>
        <View
          accessibilityState={
            {
              "busy": undefined,
              "checked": undefined,
              "disabled": undefined,
              "expanded": undefined,
              "selected": undefined,
            }
          }
          accessibilityValue={
            {
              "max": undefined,
              "min": undefined,
              "now": undefined,
              "text": undefined,
            }
          }
          accessible={true}
          collapsable={false}
          focusable={false}
          onClick={[Function]}
          onResponderGrant={[Function]}
          onResponderMove={[Function]}
          onResponderRelease={[Function]}
          onResponderTerminate={[Function]}
          onResponderTerminationRequest={[Function]}
          onStartShouldSetResponder={[Function]}
          style={
            {
              "opacity": 1,
            }
          }
          testID="product-image 1"
        >
          <Text>
            Images Here
          </Text>
          <Image
            resizeMode="contain"
            source={1}
            style={
              {
                "height": 200,
                "width": 150,
              }
            }
          />
        </View>
        <View
          accessibilityState={
            {
              "busy": undefined,
              "checked": undefined,
              "disabled": undefined,
              "expanded": undefined,
              "selected": undefined,
            }
          }
          accessibilityValue={
            {
              "max": undefined,
              "min": undefined,
              "now": undefined,
              "text": undefined,
            }
          }
          accessible={true}
          collapsable={false}
          focusable={false}
          onClick={[Function]}
          onResponderGrant={[Function]}
          onResponderMove={[Function]}
          onResponderRelease={[Function]}
          onResponderTerminate={[Function]}
          onResponderTerminationRequest={[Function]}
          onStartShouldSetResponder={[Function]}
          style={
            {
              "opacity": 1,
            }
          }
          testID="product-image 2"
        >
          <Text>
            Images Here
          </Text>
          <Image
            resizeMode="contain"
            source={1}
            style={
              {
                "height": 200,
                "width": 150,
              }
            }
          />
        </View>
        <View
          accessibilityState={
            {
              "busy": undefined,
              "checked": undefined,
              "disabled": undefined,
              "expanded": undefined,
              "selected": undefined,
            }
          }
          accessibilityValue={
            {
              "max": undefined,
              "min": undefined,
              "now": undefined,
              "text": undefined,
            }
          }
          accessible={true}
          collapsable={false}
          focusable={false}
          onClick={[Function]}
          onResponderGrant={[Function]}
          onResponderMove={[Function]}
          onResponderRelease={[Function]}
          onResponderTerminate={[Function]}
          onResponderTerminationRequest={[Function]}
          onStartShouldSetResponder={[Function]}
          style={
            {
              "opacity": 1,
            }
          }
          testID="product-image 3"
        >
          <Text>
            Images Here
          </Text>
          <Image
            resizeMode="contain"
            source={1}
            style={
              {
                "height": 200,
                "width": 150,
              }
            }
          />
        </View>
        <View
          accessibilityState={
            {
              "busy": undefined,
              "checked": undefined,
              "disabled": undefined,
              "expanded": undefined,
              "selected": undefined,
            }
          }
          accessibilityValue={
            {
              "max": undefined,
              "min": undefined,
              "now": undefined,
              "text": undefined,
            }
          }
          accessible={true}
          collapsable={false}
          focusable={false}
          onClick={[Function]}
          onResponderGrant={[Function]}
          onResponderMove={[Function]}
          onResponderRelease={[Function]}
          onResponderTerminate={[Function]}
          onResponderTerminationRequest={[Function]}
          onStartShouldSetResponder={[Function]}
          style={
            {
              "opacity": 1,
            }
          }
          testID="product-image 4"
        >
          <Text>
            Images Here
          </Text>
          <Image
            resizeMode="contain"
            source={1}
            style={
              {
                "height": 200,
                "width": 150,
              }
            }
          />
        </View>
      </View>
    </View>
  </RCTScrollView>
</View>
`);
    })
})