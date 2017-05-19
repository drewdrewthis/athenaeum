RadioCard Example:

No Image:

```example
    class RadioCardExample extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          radioValue: '',
        };

        this.onChange = this.onChange.bind(this);
      }

      onChange(value) {
        this.setState({
          value
        });
      }

      render() {
        return (
          <Layout
            mediumCols={[ 6 ]}
          >
            <RadioCard
              input={{
                name: 'radio_test',
                value: this.state.value,
                onChange: this.onChange,
              }}
              label='Donec lobortis dui'
              description='Sed lobortis et quam at rhoncus'
              radioValue='Choice1'
            />

            <RadioCard
              input={{
                name: 'radio_test',
                value: this.state.value,
                onChange: this.onChange,
              }}
              label='Donec lobortis dui'
              description='Mauris tristique efficitur enim'
              radioValue='Choice2'
            />
          </Layout>
        )
      }
    }

    <RadioCardExample />
```

With Image:

```example
    class RadioCardExample extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          radioValue: '',
        };

        this.onChange = this.onChange.bind(this);
      }

      onChange(value) {
        this.setState({
          value
        });
      }

      render() {
        return (
          <Layout
            mediumCols={[ 6 ]}
          >
            <RadioCard
              input={{
                name: 'radio_test',
                value: this.state.value,
                onChange: this.onChange,
              }}
              label='Donec lobortis dui'
              description='Sed lobortis et quam at rhoncus'
              image='https://styles.policygenius.com/23.2.0/styleguide/images/Apply-online.png'
              radioValue='Choice1'
            />

            <RadioCard
              input={{
                name: 'radio_test',
                value: this.state.value,
                onChange: this.onChange,
              }}
              label='Donec lobortis dui'
              description='Mauris tristique efficitur enim'
              image='https://styles.policygenius.com/23.2.0/styleguide/images/Call-an-expert.png'
              radioValue='Choice2'
            />
          </Layout>
        )
      }
    }

    <RadioCardExample />
```

With Bottom Sections:

```example
    class RadioCardExample extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          radioValue: '',
        };

        this.onChange = this.onChange.bind(this);
      }

      onChange(value) {
        this.setState({
          value
        });
      }

      render() {
        return (
          <Layout
            mediumCols={[ 6 ]}
          >
            <RadioCard
              input={{
                name: 'radio_test',
                value: this.state.value,
                onChange: this.onChange,
              }}
              label='Donec lobortis dui'
              description='Sed lobortis et quam at rhoncus'
              sections={[
                { label: 'Such label', value: '$100' },
                { label: 'much text', value: '$20' }
              ]}
              radioValue='Choice1'
            />

            <RadioCard
              input={{
                name: 'radio_test',
                value: this.state.value,
                onChange: this.onChange,
              }}
              label='Donec lobortis dui'
              description='Mauris tristique efficitur enim'
              sections={[
                { label: 'Such label', value: '$200' },
              ]}
              radioValue='Choice2'
            />
          </Layout>
        )
      }
    }

    <RadioCardExample />
```