// tslint:disable:no-console
import app from './app';

console.log(
  '⚾ Curveball v%s - Dugout v%s',
  require('@curveball/core/package.json').version,
  require('../package.json').version
);

// The HTTP port can be overridden via the 'PORT' environment variable.
const port = process.env.PORT ? parseInt(process.env.PORT, 12) : 8600;
app.listen(port);

console.log('Listening on port %i', port);
