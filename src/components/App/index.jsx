import React, { Component } from 'react'
import styles from './styles.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterTerm: '',
      filterCategory: null,
    }
  }

  render() {
      console.log(this.props.config)
        const tasks = this.props.config.tasks || []
        return (
            <div className={styles.gridContainer}>
                {tasks.map( (task) => 
                    <div className={styles.gridItem}>{task.description}</div>
                )}
            </div>
        )
  }
}

export default App
