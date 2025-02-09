import type {
  FastifyReply,
  FastifyRequest,
  HookHandlerDoneFunction,
} from 'fastify';

export function fixHook(
  request: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction,
) {
  const ua = request.headers['user-agent'];
  // Swift SDK issue: https://github.com/Openpanel-dev/swift-sdk/commit/d588fa761a36a33f3b78eb79d83bfd524e3c7144
  if (ua) {
    const regex = /OpenPanel\/(\d+\.\d+\.\d+)\sOpenPanel\/(\d+\.\d+\.\d+)/;
    const match = ua.match(regex);
    if (match) {
      request.headers['user-agent'] = ua.replace(
        regex,
        `OpenPanel/${match[1]}`,
      );
    }
  }
  done();
}
