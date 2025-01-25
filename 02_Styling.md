# Styling in React-Native

**Note :** Here, in React-Native camel casing is used for naming the CSS variables.

### Ways in which styling can be applied in React-Native : 

1. **Inline-Style :** Dynamic styling 
```jsx
<SafeAreaView style={{ marginHorizontal: 'auto', height: "100%", width: "100%" }}></SafeAreaView>
```

2. **JavaScript Object :** Causes rendering issues
```jsx
const App = () => {
    const styles = {
        container : {
            marginHorizontal: 'auto', 
            height: "100%", 
            width: "100%"
        },
        text: {
            textAlign: 'center',
            fontSize: 30,
        },
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Hello World!!</Text>
        </SafeAreaView>
    );
};

export defaut App;
```

3. **StyleSheet by React-Native :** Most widely used.
```jsx
const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Hello World!!</Text>
        </SafeAreaView>
    );
};

export defaut App;

const styles = StyleSheet.create({
    container : {
        marginHorizontal: 'auto', 
        height: "100%", 
        width: "100%"
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
    },
});
```