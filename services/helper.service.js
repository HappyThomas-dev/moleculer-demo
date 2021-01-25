module.exports= {
    name: 'helper',
    events: {
        'Hello.called'(payload) {
            this.logger.info('hellper-hello.called', this.name, this.broker.nodeID, this.broker.instanceID)

            this.logger.info('Helper Service Caught an Event');
            this.logger.info(payload);
        }
    }
}