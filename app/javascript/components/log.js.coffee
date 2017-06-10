console.log("USING COFFEE")
@Log = React.createClass
  getInitialState: ->
    console.log('Init')
    records: @props.log_events
  render: ->
    console.log('Log')
    `<h2 className="title">LOG:</h2>

    `