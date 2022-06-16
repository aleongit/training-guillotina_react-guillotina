import pytest


pytestmark = [pytest.mark.asyncio]


async def test_install(guillotina_demo_requester):  # noqa
    async with guillotina_demo_requester as requester:
        response, _ = await requester('GET', '/db/guillotina/@addons')
        assert 'guillotina_demo' in response['installed']
